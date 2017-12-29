<?php

namespace App\Http\Middleware;

use Closure;

class OnlyAjax
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //!$request->ajax() || 
        if (!$request->wantsJson()) {
            return response()->json([
                'error' => [
                    'code'=> 403,
                    'message'=> 'Forbiden'
                ]
            ], 403);
        }
        return $next($request);
    }
}
