/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing covidFacts Module.
     */
    angular
        .module("covidFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            covidData: covidData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final covidData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each covid as well as other information such as the
     * location and the size of the covids
     *
     */

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "What does COVID-19 stand for?",
            possibilities: [
                {
                    answer: "It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered."
                },
                {
                    answer: "It's a term that stands for Coronavirus Disease 2019, the year it was first identified."
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What other viruses belong to the coronavirus family?",
            possibilities: [
                {
                    answer: "SARS and influenza"
                },
                {
                    answer: "SARS and MERS"
                },
                {
                    answer: "SARS and HIV"
                },

            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "True or False: The virus is mutating rapidly.",
            possibilities: [
                {
                    answer: "True"
                },
                {
                    answer: "False"
                },

            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How does weather seem to affect the novel coronavirus?",
            possibilities: [
                {
                    answer: "The virus can’t survive in hot, humid climates."
                },
                {
                    answer: "Cold temperatures can kill the virus."
                },
                {
                    answer: "It is not yet known."
                },

            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "True or False: COVID-19 has currently been detected on all seven continents.",
            possibilities: [
                {
                    answer: "True"
                },
                
                {
                    answer: "False"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How is COVID-19 passed on?",
            possibilities: [
                {
                    answer: "Through droplets that come from your mouth and nose when you cough or breathe out"
                },
                {
                    answer: "In sexual fluids, including semen, vaginal fluids or anal mucous"
                },
                {
                    answer: "By drinking unclean water"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What are the common symptoms of COVID-19?",
            possibilities: [
                {
                    answer: "A new and continuous cough"
                },
                {
                    answer: "Fever"
                },
                {
                    answer: "Tiredness"
                },
                {
                    answer: "All of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Are people living with HIV always more at risk?",
            possibilities: [
                {
                    answer: "Yes – people with HIV have weaker immune systems"
                },
                {
                    answer: "No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk"
                },
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "When should fabric face masks be worn?",
            possibilities: [
                {
                    answer: "On public transport"
                },
                {
                    answer: "In confined or crowded spaces"
                },
                {
                    answer: "In small shops"
                },
                {
                    answer: "All of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Can COVID-19 be cured?",
            possibilities: [
                {
                    answer: "Yes – Hot drinks can cure COVID-19"
                },
                {
                    answer: "No – COVID-19 is a death sentence"
                },
                {
                    answer: "No – but most people get better by themselves"
                },

            ],
            selected: null,
            correct: null
        }
    ];

    var covidData = [
        
        {
            type: "N-95 Masks",
          image_url: "https://image.shutterstock.com/image-photo/kn95-n95-mask-protection-pm-260nw-1681636747.jpg",
          description: 'An N95 respirator is a commonly-used, abbreviated name for an N95 filtering facepiece respirator, which is a particulate-filtering facepiece respirator that meets the U.S. National Institute for Occupational Safety and Health (NIOSH) N95 classification of air filtration, meaning that it filters at least 95% of airborne particles. This standard does not require that the respirator be resistant to oil; another standard, P95, adds that requirement. The N95 type is the most common particulate-filtering facepiece respirator.It is an example of a mechanical filter respirator, which provides protection against particulates but not against gases or vapors.An authentic N95 respirator is marked with the text "NIOSH" or the NIOSH logo, the filter class ("N95"), a "TC" approval number of the form XXX-XXXX, the approval number must be listed on the NIOSH Certified Equipment List (CEL) or the NIOSH Trusted-Source page, and it must have headbands instead of ear loops.'
        },
        {
            type: "PPE Kit",
            image_url: "https://images-na.ssl-images-amazon.com/images/I/61k-rZ3D%2BBL._SX466_.jpg",
            description: "Personal protective equipment (PPE) is protective clothing, helmets, goggles, or other garments or equipment designed to protect the wearer's body from injury or infection. The hazards addressed by protective equipment include physical, electrical, heat, chemicals, biohazards, and airborne particulate matter. Protective equipment may be worn for job-related occupational safety and health purposes, as well as for sports and other recreational activities.Protective clothing is applied to traditional categories of clothing, and protective gear applies to items such as pads, guards, shields, or masks, and others. PPE suits can be similar in appearance to a cleanroom suit. The purpose of personal protective equipment is to reduce employee exposure to hazards when engineering controls and administrative controls are not feasible or effective to reduce these risks to acceptable levels. PPE is needed when there are hazards present. PPE has the serious limitation that it does not eliminate the hazard at the source and may result in employees being exposed to the hazard if the equipment fails."
        },
        {
            type: "Hand Sanitizer",
            image_url: "https://image.shutterstock.com/image-photo/coronavirus-prevention-medical-surgical-masks-600w-1661207908.jpg",
            description: "Hand sanitizer is a liquid, gel, or foam generally used to decrease infectious agents on the hands. In most settings hand washing with soap and water is generally preferred. Hand sanitizer is less effective at killing certain kinds of germs, such as norovirus and Clostridium difficile and unlike soap and water, it cannot remove harmful chemicals. People may incorrectly wipe off hand sanitizer before it has dried, and some are less effective because their alcohol concentrations are too low. In most healthcare settings alcohol-based hand sanitizers are preferable to hand washing with soap and water, because it may be better tolerated and is more effective at reducing bacteria. Hand washing with soap and water, however, should be carried out if contamination can be seen, or following the use of the toilet. The general use of non-alcohol-based hand sanitizers has no recommendations."
        },
        {
            type: "Gloves",
            image_url: "https://i0.wp.com/vashielectricals.com/wp-content/uploads/2020/06/HG-NW32.png?fit=2200%2C2200&ssl=1",
            description: "A glove is a garment covering the whole hand. Gloves usually have separate sheaths or openings for each finger and the thumb.If there is an opening but no (or a short) covering sheath for each finger they are called fingerless gloves. Fingerless gloves having one small opening rather than individual openings for each finger are sometimes called gauntlets, though gauntlets are not necessarily fingerless. Gloves which cover the entire hand or fist but do not have separate finger openings or sheaths are called mittens. Mittens are warmer than other styles of gloves made of the same material because fingers maintain their warmth better when they are in contact with each other; reduced surface area reduces heat loss."
        }
    ];

})();
