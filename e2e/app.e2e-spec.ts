import { StarWarPage } from './app.po';

describe('star-war App', () => {
  let page: StarWarPage;

  beforeEach(() => {
    page = new StarWarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
