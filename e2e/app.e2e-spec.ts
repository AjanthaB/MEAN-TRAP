import { MEANTRAPPage } from './app.po';

describe('mean-trap App', function() {
  let page: MEANTRAPPage;

  beforeEach(() => {
    page = new MEANTRAPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
