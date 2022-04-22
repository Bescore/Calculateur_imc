//fonction de calcul
$( "#submit" ).click( function () {
    var height = parseInt( $( '#height' ).val() );
    var weight = parseInt( $( '#weight' ).val() );
    var calcul = ( weight ) / ( ( height / 100 ) * ( height / 100 ) );
    var resultat = Math.round( calcul * 10 ) / 10;
    console.log( resultat );

    function spawnResult () {
        $( '#results' ).css( { "visibility": "visible", } )
        setTimeout( () => { $( '#results' ).css( { "visibility": "hidden", } ) }, 5000 )
        $( '#nombre' ).text( resultat )
    }
    function typeText ( text ) {
        $( '#conclusion' ).text( text )
    }

    if ( resultat < 18.5 ) {
        spawnResult()
        typeText( "IMC < 18,5 kg/m² : insuffisance pondérale" )
    } else if ( 18.5 < resultat && resultat < 24.9 ) {
        spawnResult()
        typeText( "18,5 < IMC < 24,9 : poids normal" )
    } else if ( 25 < resultat && resultat < 29, 9 ) {
        spawnResult()
        typeText( "25 < IMC < 29,9 : surpoids" )

    } else if ( resultat > 30 ) {
        spawnResult()
        typeText( "IMC > 30 : obésité" )

    }


} )

//verification des deux champs, on ne veut que des nombres

$( '#height' ).keyup( function () {
    if ( isNaN( $( '#height' ).val() ) || $( '#height' ).val() == "" ) {
        alert( "je ne prends que des chiffres/nombres" );
        $( '#height' ).val( '' );
    }
} )

$( '#weight' ).keyup( function () {
    if ( isNaN( $( '#weight' ).val() ) || $( '#weight' ).val() == "" ) {
        alert( "je ne prends que des chiffres/nombres" );
        $( '#weight' ).val( '' );
    }
} )
//signature
$( '.sign' ).text( ' J.query by J.m Lator' ).css( { "font-size": "11px", "color": "red" } )
