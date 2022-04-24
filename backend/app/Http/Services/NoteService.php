<?php

namespace App\Http\Services;

use App\Models\Note;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

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
            ->selectRaw("id, title, isDone")
            ->with($eagerLoad)
            ->orderBy('created_at', 'desc')
            ->paginate($dataPerPage);
    }

    public function addNote(array $attributes) 
    {
        return $this->noteModel->create([
            'title' => $attributes['title'],
            'isDone' => 0
        ]);
    }

    public function update(array $attributes, int $id)
    {
        $note = $this->noteModel->where('id', $id)->first();
        return $note->update([
            'isDone' => ($attributes['isDone'] == "true") ? 1 : 0
        ]);
    }

    public function delete(int $id)
    {
        return $this->noteModel->findOrFail($id)->delete();
    }

}