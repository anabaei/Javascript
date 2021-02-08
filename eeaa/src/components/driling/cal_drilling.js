


export default function cal_drilling(O3,Q,D,D1,D2,MW,PV,YP) {
 

    
    console.log(Q + " " + D2 + " " + D1)
    //////// vp (ft/min) ////////
    let vp = (24.48*Q )/ D2

    ///// va (ft/min) //////
    let va = (24.48*Q )/ (Math.pow(D2,2) - Math.pow(D1,2)) 

    /////////// Mep //////////
    let O300 = PV + YP 
    let O600 = O300 + PV 
    let O100 = O300 - 2*PV/3
    let np = 3.33 *  Math.log(O600/O300)
    let kp = 5.4 * O600 / Math.pow(1022, np)
    let Mep = (100 * kp) * Math.pow((1.6*vp/D), np-1) * Math.pow( (3*np+1)/(4*np), np)

   //////////// Mea /////////////
    let na = 0.657 * Math.log(O100/O3)
    let ka = (5.11* O3)/(5.11*na)
    let Mea = (100 * ka) * Math.pow((2.4*va/(D2-D1)) , na-1) * Math.pow( (2*na+1)/(3*na), na)
    /////// Rendp  //////
    let Rendp = (15.467*vp*D*MW)/Mep 

    /////// Renann  //////
    let Renann = (15.467*va*D*MW)/Mea 

    return (
        [ 
            {value: vp.toString(), key: 'vp (ft/min)'}, 
            {value: va.toString(), key: 'va (ft/min)'},
            {value: kp.toString() , key: 'kp'},
            {value: Rendp.toString(), key: 'Rendp'},
            {value: Mep.toString(), key: 'Mep'},
            {value: Mea.toString(), key: 'Mea'}
        ]
      )}


