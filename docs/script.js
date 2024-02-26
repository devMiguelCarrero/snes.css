window.onload = () => {
  document.querySelectorAll('div.code-grid').forEach((el) => {
    const html = el.innerHTML;
    const highlighted = hljs.highlight('html', html).value;

    const codePre = el.parentNode?.querySelector('code');
    if (codePre) {
      codePre.innerHTML = highlighted;
    }
  });
};
