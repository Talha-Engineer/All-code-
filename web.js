function cal(){
    var EP = document.getElementById("ep").textContent;
    var EQ = document.getElementById("name").value;
    if(EQ)
    {
        var E_Price = EP * EQ;
        document.getElementById("resulte").value=E_Price;
    }
    else{
        document.getElementById("resulte").value='';
    }

    var FP = document.getElementById("fp").textContent;
    var FQ = document.getElementById("numf").value;
    if(FQ)
    {
        var F_price = FP * FQ;
        document.getElementById("resultf").value=F_price;
    }
    else{
        document.getElementById("resultf").value='';
    }

    var OP =document.getElementById("op").textContent;
    var OQ =document.getElementById("numo").value;
    if(OP)
    {
        var O_price = OP * OQ;
        document.getElementById("resulto").value=O_price;
    }
    else{
        document.getElementById("resulto").value='';
    }

    var total = E_Price + F_price + O_price;
    document.getElementById("total").value=total;

    var Gst = (total * 15)/100;
    document.getElementById("gst").value=Gst;

    var Gtotal = total + Gst;
    document.getElementById("gtotal").value=Gtotal;
}
