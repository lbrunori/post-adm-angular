import { PostAdmPage } from './app.po';

describe('post-adm App', () => {
  let page: PostAdmPage;

  beforeEach(() => {
    page = new PostAdmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
