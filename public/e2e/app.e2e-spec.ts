import { HerbariumAppPage } from './app.po';

describe('herbarium-app App', () => {
  let page: HerbariumAppPage;

  beforeEach(() => {
    page = new HerbariumAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
