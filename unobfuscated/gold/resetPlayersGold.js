/**
* @license StewartPrivateLicense-2.0.0
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/gold/resetPlayersGold.js")?.answers?.[0]}`)).then(async x => {
        if (1674352066288 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            let player = prompt("Who's gold would you like to reset?");
            let { stateNode: { props, state } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                if (players && Object.keys(players).map(x=>x.toLowerCase()).includes(player.toLowerCase())) props.liveGameController.setVal({
                    path: "c/".concat(props.client.name),
                    val: {
                        b: props.client.blook,
                        g: state.gold,
                        tat: `${player}:swap:0`
                    }
                });
            })
        }
    });
})();