import { TruckTrackPage } from './app.po';

describe('truck-track App', () => {
  let page: TruckTrackPage;

  beforeEach(() => {
    page = new TruckTrackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
