export default function webFontsLoader(families = [
  'Droid Sans',
  'Droid Serif:700'
]) {
  if (sessionStorage.fonts === families.join(' ')) {
    document.documentElement.classList.add('wf-active');
  }
  import('webfontloader')
    .then(WebFont => {
      WebFont.load({
        active() {
          sessionStorage.fonts = families.join(' ');
        },
        google: {
          families
        }
      })
    });
}
