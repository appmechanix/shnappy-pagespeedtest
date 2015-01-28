var config = require('config');
var logger = require('appmech-logger');
var psi = require('psi');

exports.ProcessJob = function (callback) {
    var domainsToCheck = config.Jobs.PageSpeed.Domains;

    for (var i = 0; i < domainsToCheck.length; i++) {

    }


    psi('shnappy.com', function (err, data) {
        var model = {
            domain: data.id,
            score: data.score,
            stats: data.pageStats
        };

        logger.Event("PageSpeedTest", model, function () {
            logger.info("Ran page speed test");
            callback(true);
        });
    });
};

function CheckDomain(domain) {
}