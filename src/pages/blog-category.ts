import { initDuplicateArticlesRemoval } from 'src/components/duplicates-remove';
import { initArticlesSlider } from 'src/components/slider';

window.Webflow?.push(() => {
  initDuplicateArticlesRemoval();
  initArticlesSlider();
});
