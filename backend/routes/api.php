<?php

use App\Http\Controllers\Note\NoteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('note')->group(function(){
    Route::get('/list', [NoteController::class, 'list']);
    Route::post('/add', [NoteController::class, 'store']);
    Route::put('/update/{id}', [NoteController::class, 'update']);
    Route::delete('/delete/{id}', [NoteController::class, 'destroy']);
});
