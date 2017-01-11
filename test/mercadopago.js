var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

describe('Mercadopago SDK', function(){
    var mp,
        clientId = 'CLIENT_ID',
        clientSecret = 'CLIENT_SECRET',
        accessToken = 'ACCESS_TOKEN';

    before(function(){
        //Initialize Mercadopago SDK
        mp = require('../index.js');
    });

    describe('Check Modules', function(){
        it('Configurations module', function(){
            assert.isObject(mp.configurations, 'Configurations module doesnt exists');
        });

        it('Payment module', function(){
            assert.isObject(mp.payment, 'Payment module doesnt exists');
        }); 

        it('Utils module', function(){
            assert.isObject(mp.utils, 'Utils exists');
        }); 
    });

    describe('Configure Method', function(){
        it('Check configuration is made', function(){
            mp.configure({
                client_id: clientId,
                client_secret: clientSecret
            });

            assert.equal(mp.configurations.getClientId(), clientId);
            assert.equal(mp.configurations.getClientSecret(), clientSecret);
        });
    });
});