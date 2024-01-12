sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demo/sap/demo1/test/integration/FirstJourney',
		'demo/sap/demo1/test/integration/pages/RisksList',
		'demo/sap/demo1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demo/sap/demo1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);