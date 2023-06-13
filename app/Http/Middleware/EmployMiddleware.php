<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EmployMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('custom')->check()) {
            return $next($request);
        }

        throw new AuthenticationException('Unauthenticated.');
    }

}

