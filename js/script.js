let startTime;
let stopwatchInterval;
let elapsedTime = 0;
let isPaused = false;

const stopwatch = document.getElementById( "stopwatch" );

function start ()
{
    if ( !isPaused )
    {
        startTime = new Date().getTime();
        stopwatchInterval = setInterval( updateStopwatch, 100 );
    } else
    {
        startTime = new Date().getTime() - elapsedTime;
        stopwatchInterval = setInterval( updateStopwatch, 100 );
        isPaused = false;
    }
}

function pause ()
{
    clearInterval( stopwatchInterval );
    isPaused = true;
    elapsedTime = new Date().getTime() - startTime;
}

function reset ()
{
    clearInterval( stopwatchInterval );
    stopwatch.innerHTML = "00:00:00:00";
    elapsedTime = 0;
    isPaused = false;
}

function updateStopwatch ()
{
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    const hours = Math.floor( elapsedTime / ( 1000 * 60 * 60 ) );
    const minutes = Math.floor( ( elapsedTime % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    const seconds = Math.floor( ( elapsedTime % ( 1000 * 60 ) ) / 1000 );
    const milliseconds = Math.floor( ( elapsedTime % 1000 ) / 10 );
    stopwatch.innerHTML = `${ String( hours ).padStart( 2, '0' ) }:${ String( minutes ).padStart( 2, '0' ) }:${ String( seconds ).padStart( 2, '0' ) }:${ String( milliseconds ).padStart( 2, '0' ) }`;
}