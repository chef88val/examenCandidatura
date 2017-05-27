import { EmaneAppPage } from './app.po';

describe('emane-app App', () => {
  let page: EmaneAppPage;

  beforeEach(() => {
    page = new EmaneAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
