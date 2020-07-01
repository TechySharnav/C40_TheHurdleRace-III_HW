class Voter{
    constructor(){}

    getCount(){
        var voterCountRef = database.ref('totalVote');
        voterCountRef.on("value",function(data){
            voterCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            totalVote: count
        });
    }
    update(email, answer1, answer2, answer3){
        var VoterIndex = "voter"+voterCount;
        database.ref(VoterIndex).set({
            email: email,
            ans1: answer1,
            ans2: answer2,
            ans3: answer3
        });
    }
}