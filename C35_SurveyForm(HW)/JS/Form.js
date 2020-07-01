class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Survey Form");
        title.position(200,10);

        var emailTxt = createElement('h3');
        emailTxt.html("Email:");
        emailTxt.position(130,140);
        var Emailinput = createInput("");
        Emailinput.position(190,160);
        
        var Q1Txt = createElement('h3');
        Q1Txt.html("Q1.How much time do you spend on homework every night?");
        Q1Txt.position(130,200);
        var ans1input = createInput("");
        ans1input.position(130,250);

        var Q2Txt = createElement('h3');
        Q2Txt.html("Q2. What are three things that can improve the class most?");
        Q2Txt.position(130,260);
        var ans2input = createInput("");
        ans2input.position(130,310);

        var Q3Txt = createElement('h3');
        Q3Txt.html("Q3.What are you proud of accomplishing in class this year?");
        Q3Txt.position(130,320);
        var ans3input = createInput("");
        ans3input.position(130,370);


        var button = createButton('Submit');
        button.position(200,400);


        var msg = createElement('h3');

        
        button.mousePressed(function(){
            emailTxt.hide();
            Emailinput.hide();
            Q1Txt.hide();
            Q2Txt.hide();
            Q3Txt.hide();
            ans1input.hide();
            ans2input.hide();
            ans3input.hide();
            button.hide();

            var email = Emailinput.value();
            var ans1 = ans1input.value();
            var ans2 = ans2input.value();
            var ans3 = ans3input.value();
            voterCount = voterCount + 1;

            voter.update(email, ans1, ans2, ans3);
            voter.updateCount(voterCount);
            msg.html("Form Submitted Successfully!!");
            msg.position(200,200);
        });
    }
}