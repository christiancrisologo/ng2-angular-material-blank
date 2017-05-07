import { Angular2MaterialComponentsPage } from './app.po';

describe('angular2-material-components App', () => {
  let page: Angular2MaterialComponentsPage;

  beforeEach(() => {
    page = new Angular2MaterialComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
