<?php

namespace App\Services;

use App\Models\Note;

class NoteService{

    protected $noteModel;

    public function __construct(Note $note)
    {
        $this->noteModel = $note;
    }
}