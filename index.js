function CountFunction(){

    let R = document.getElementById("R").value;
    let L = document.getElementById("L").value;
    let E = document.getElementById("E").value;

    //все единицы измерения в  СИ
    let t = [];
    let I_connect = [];
    let I_disconnect = [];

    for(let i = 0; i < 100; i+=0.0001)
    {
        t.push(i);
        I_connect.push(E/R*(1-Math.exp(-R/L*i)));
        I_disconnect.push(E/R*Math.exp(-R/L*i));
        if (E/R*Math.exp(-R/L*i) < 0.00001) break;
    }

    let layout_1 = {
        title: 'График I(t) при замыкании цепи',
        xaxis: {
            title: 'Время t (c)'
        },
        yaxis: {
            title: 'I(t), А'
        }
    };

    let layout_2 = {
        title: 'График I(t) при размыкании цепи',
        xaxis: {
            title: 'Время t (c)'
        },
        yaxis: {
            title: 'I(t), А'
        }
    };

    Plotly.newPlot(
        "myDiv_1",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: I_connect,
        }],
        layout_1
    );

    Plotly.newPlot(
        "myDiv_2",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: I_disconnect,
        }],
        layout_2
    );

    return false;
}
