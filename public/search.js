let pagefindPromise;
let debounceTimer;

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
      showMessage('Search index not available. Run a production build to enable search.');
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
        showMessage('Search index not available. Run a production build to enable search.');
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
  showMessage('Type to search this section…');
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
      showMessage('Type to search this section…');
      return;
    }

    const pagefind = await loadPagefind();
    const results = document.getElementById('sh-search-results');
    if (!pagefind || !results) return;

    const section = document.body.dataset.searchSection || 'home';
    const search = await pagefind.search(query, { filters: { section } });
    const resultData = await Promise.all(search.results.slice(0, 12).map((result) => result.data()));
    if (!resultData.length) {
      showMessage(`No results for “${query}”`);
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
      title.className = 'text-sm font-semibold text-[#0B2D5B] dark:text-blue-300';
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
