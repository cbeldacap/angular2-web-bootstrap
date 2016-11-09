import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Oasp4jsSampleAppComponent } from '../../../main/components/main/oasp4js-sample.component';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient } from '../../../oasp/oasp-security/http-client.service';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';

let oasp = new Oasp4jsSampleAppComponent();

describe('Oasp4jsSampleAppComponent', () => {
  beforeEach(() => {
  });

  it('should be defined!', () => {
    expect(oasp).toBeDefined();
  });

});
