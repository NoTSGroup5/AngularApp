import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for epd', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be epd', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('epd');
    })
  });

  it('navbar-brand should be epd@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('epd@0.0.1');
  });

  
    it('MedicalFile component should be loadable',() => {
      page.navigateTo('/MedicalFile');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('MedicalFile');
    });

    it('MedicalFile table should have 9 columns',() => {
      page.navigateTo('/MedicalFile');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });

  
    it('Medicine component should be loadable',() => {
      page.navigateTo('/Medicine');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Medicine');
    });

    it('Medicine table should have 7 columns',() => {
      page.navigateTo('/Medicine');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });

  
    it('Visit component should be loadable',() => {
      page.navigateTo('/Visit');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Visit');
    });

    it('Visit table should have 5 columns',() => {
      page.navigateTo('/Visit');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Treatment component should be loadable',() => {
      page.navigateTo('/Treatment');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Treatment');
    });

    it('Treatment table should have 6 columns',() => {
      page.navigateTo('/Treatment');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('TreatmentLog component should be loadable',() => {
      page.navigateTo('/TreatmentLog');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('TreatmentLog');
    });

    it('TreatmentLog table should have 4 columns',() => {
      page.navigateTo('/TreatmentLog');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  
    it('Organisation component should be loadable',() => {
      page.navigateTo('/Organisation');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Organisation');
    });

    it('Organisation table should have 9 columns',() => {
      page.navigateTo('/Organisation');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });

  
    it('OrganisationType component should be loadable',() => {
      page.navigateTo('/OrganisationType');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('OrganisationType');
    });

    it('OrganisationType table should have 4 columns',() => {
      page.navigateTo('/OrganisationType');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  
    it('OrganisationPermission component should be loadable',() => {
      page.navigateTo('/OrganisationPermission');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('OrganisationPermission');
    });

    it('OrganisationPermission table should have 6 columns',() => {
      page.navigateTo('/OrganisationPermission');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});
