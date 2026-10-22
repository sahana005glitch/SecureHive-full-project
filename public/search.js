let pagefindPromise;
let debounceTimer;

/* -->pagefindPromise stores the ongoing or completed
  --->  Pagefind loading operation so the script can reuse it.
  --->debounceTimer manages the delay before searching.
  ---> lang detects the current page's language. */
  
const lang = (document.documentElement.lang || 'en').toLowerCase().split('-')[0];
const messagesByLocale = {
  en: {
    unavailable: 'Search index not available. Run a production build to enable search.',
    initial: 'Type to search this section…',
    noResults: (query) => `No results for “${query}”`,
  },
  fr: {
    unavailable:
      "L'index de recherche est indisponible. Lancez une compilation de production pour activer la recherche.",
    initial: 'Saisissez un terme pour rechercher dans cette section…',
    noResults: (query) => `Aucun résultat pour « ${query} »`,
  },
  de: {
    unavailable: 'Suchindex nicht verfügbar. Bitte erstellen Sie einen Produktions-Build, um die Suche zu aktivieren.',
    initial: 'Suchbegriff eingeben, um diesen Bereich zu durchsuchen…',
    noResults: (query) => `Keine Ergebnisse für „${query}“ gefunden`,
  },
};
const messages = messagesByLocale[lang] || messagesByLocale.en;

const messageClass = 'text-sm text-slate-500 dark:text-slate-400 px-3 py-6 text-center';

function showMessage(text) {
  const results = document.getElementById('sh-search-results');
  if (!results) return;

  const message = document.createElement('p');
  message.className = messageClass;
  message.textContent = text;
  results.replaceChildren(message);
}

async function loadPagefind() {
  if (!pagefindPromise) {
    const pagefindPath = document.querySelector('[data-search-root]')?.dataset.pagefindUrl;
    if (!pagefindPath) {
      showMessage(messages.unavailable);
      return null;
    }

    pagefindPromise = import(new URL(pagefindPath, window.location.origin).href)
      .then(async (pagefind) => {
        await pagefind.options?.({ excerptLength: 20 });
        return pagefind;
      })
      .catch((error) => {
        console.error('Failed to load the Pagefind search index:', error);
        pagefindPromise = null;
        showMessage(messages.unavailable);
        return null;
      });
  }

  return pagefindPromise;
}

function openSearch() {
  const dialog = document.getElementById('sh-search-dialog');
  dialog?.showModal();
  document.getElementById('sh-search-input')?.focus();
  loadPagefind();
}

function closeSearch() {
  document.getElementById('sh-search-dialog')?.close();
  const input = document.getElementById('sh-search-input');
  if (input) input.value = '';
  showMessage(messages.initial);
}

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;

  if (event.target.closest('#sh-search-open')) {
    openSearch();
    return;
  }

  if (event.target === document.getElementById('sh-search-dialog')) closeSearch();
});

document.addEventListener('submit', (event) => {
  if (event.target instanceof Element && event.target.id === 'sh-search-form') event.preventDefault();
});

document.addEventListener('keydown', (event) => {
  const dialog = document.getElementById('sh-search-dialog');
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape' && dialog?.open) closeSearch();
});

document.addEventListener('input', (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.id !== 'sh-search-input') return;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    const query = event.target.value.trim();
    if (!query) {
      showMessage(messages.initial);
      return;
    }

    const pagefind = await loadPagefind();
    const results = document.getElementById('sh-search-results');
    if (!pagefind || !results) return;

    const section = document.body.dataset.searchSection || 'home';
    const search = await pagefind.search(query, { filters: { section, lang } });
    const resultData = await Promise.all(search.results.slice(0, 12).map((result) => result.data()));
    if (!resultData.length) {
      showMessage(messages.noResults(query));
      return;
    }

    const links = resultData.map((data) => {
      const link = document.createElement('a');
      const resultUrl = new URL(data.url, window.location.origin);
      const trailingSlash = document.querySelector('[data-search-root]')?.dataset.trailingSlash === 'true';
      if (trailingSlash && !resultUrl.pathname.endsWith('/')) resultUrl.pathname += '/';
      if (!trailingSlash && resultUrl.pathname.length > 1) resultUrl.pathname = resultUrl.pathname.replace(/\/+$/, '');
      link.href = `${resultUrl.pathname}${resultUrl.search}${resultUrl.hash}`;
      link.className = 'block rounded-lg px-3 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors';
      link.setAttribute('role', 'option');

      const title = document.createElement('div');
      title.className = 'text-sm font-semibold text-primary dark:text-blue-300';
      title.textContent = data.meta?.title || data.url;

      const excerpt = document.createElement('div');
      excerpt.className = 'text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2';
      excerpt.innerHTML = data.excerpt || '';

      link.append(title, excerpt);
      return link;
    });

    results.replaceChildren(...links);
  }, 180);
});
