/**
 * Library of functions used in calculating derivatives
 * @author Brandon
 */

/*
 * Returns the derivative of a function at point x
 * by using the forward difference formula f'(x) = f(x + h) + f(x)
 * 
 * @param x the x value to evaluate the function and derivate at; a number
 * @param h the step size; a number
 * @param a handle to a function; what you want to take the derivative of
 * @param absolute error tolerance. If not specified, defaults to 0.01
 * @return A Number representing the derivative at x
*/

var forwardDifference = function(x,h,err,funct){
    err =err||0.01;
    if( h <= 0)
    {
        return NaN;
    }
    
    var fx = funct(x);
    var fx_h = funct(x + h);
    
    var dx = (fx_h/h)  - (fx/h);
    var dx_prev = 0;
    
    while(Math.abs(dx - dx_prev) > err)
    {
        h -= h/2;
        if(h == 0 || x + h == 0)
        {
            return "Derivative does not exist at point " + x;
        }
        
        fx = funct(x);
        fx_h = funct(x + h);
        
        dx_prev = dx;
        dx = (fx_h - fx)/h; 
    }
    
    var dx;
    
    return (fx_h - fx)/h;
};

/*
 * Function for estimating derivative based on backward difference formula
 * @param x point at which to evaluate f'(x)
 * @param h step size
 * @param err absolute error tolerance
 * @param function handle to the function to take the derivative of
 * 
 * @return Number estimate of derivative at x
 */
var backwardDifference = function(x,h,err,funct)
{
    err =err||0.01;
    if( h <= 0)
    {
        return NaN;
    }
    
    var fx = funct(x);
    var fx_h = funct(x - h);
    
    var dx = (fx/h)  - (fx_h/h);
    var dx_prev = 0;
    
    while(Math.abs(dx - dx_prev) > err)
    {
        h -= h/2;
        if(h == 0 || x + h == 0)
        {
            return "Derivative does not exist at point " + x;
        }
        
        fx = funct(x);
        fx_h = funct(x - h);
        
        dx_prev = dx;
        dx = (fx/h)  - (fx_h/h);
    }
 
    return dx;
};

/*
 * Central difference formula for estimating derivative of a function at x
 * @param x point at which to estimate the derivative
 * @param h step size
 * @param err absolute error tolerance
 * @param funct handle to the function to estimate the derivative of
 * 
 * @return Number estimate of derivative at x
 */
var centralDifference = function(x,h,err,funct)
{
    err =err||0.01;
    if( h <= 0)
    {
        return NaN;
    }
    
    var fxPlus = funct(x + h);
    var fxMinus = funct(x - h);
    
    var dx = (fxPlus/(2*h))  - (fxMinus/(2*h));
    var dx_prev = 0;
    
    while(Math.abs(dx - dx_prev) > err)
    {
        h -= h/2;
        if(h == 0 || x + h == 0)
        {
            return "Derivative does not exist at point " + x;
        }
        
        fxPlus = funct(x + h);
        fxMinus = funct(x - h);
        
        dx_prev = dx;
        dx = (fxPlus/(2*h))  - (fxMinus/(2*h));
    }
 
    return dx;
};


