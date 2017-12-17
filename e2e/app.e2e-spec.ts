import { YunhaseoNgPage } from './app.po';

describe('yunhaseo-ng App', () => {
  let page: YunhaseoNgPage;

  beforeEach(() => {
    page = new YunhaseoNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
