import { CampgroundPage } from './app.po';

describe('campground App', () => {
  let page: CampgroundPage;

  beforeEach(() => {
    page = new CampgroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
