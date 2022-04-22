<?php

namespace App\Http\Controllers\Note;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\NoteService;

class NoteController extends Controller
{
    protected $noteService;

    public function __construct(NoteService $noteService)
    {
        $this->noteService = $noteService;
    }

    public function list()
    {
        return "test";
    }
}
