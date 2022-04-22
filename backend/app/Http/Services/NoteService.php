<?php

namespace App\Http\Services;

use App\Models\Note;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Nette\Utils\Json;

class NoteService{

    protected $noteModel;

    public function __construct(Note $note)
    {
        $this->noteModel = $note;
    }

    public function all($attributes, $eagerLoad = []): LengthAwarePaginator
    {
        $dataPerPage = 5;
        if (isset($attributes['dataPerPage']) && is_int($attributes['dataPerPage'])) {
            $dataPerPage = $attributes['dataPerPage'];
        }
            return $this->noteModel
            ->selectRaw("title, isDone")
            ->with($eagerLoad)
            ->paginate($dataPerPage);
    }

    public function addNote(array $attributes) 
    {
        return $this->noteModel->create([
            'title' => $attributes['title'],
            'isDone' => ($attributes['isDone'] == "true") ? 1 : 0
        ]);
    }
}