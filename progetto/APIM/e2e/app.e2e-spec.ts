import { APIMPage } from './app.po';

describe('apim App', function() {
  let page: APIMPage;

  beforeEach(() => {
    page = new APIMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
