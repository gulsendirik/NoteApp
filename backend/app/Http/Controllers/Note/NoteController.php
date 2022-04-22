<?php

namespace App\Http\Controllers\Note;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\NoteRequest;
use App\Http\Services\NoteService;
use Illuminate\Http\JsonResponse;

class NoteController extends Controller
{
    protected $noteService;

    public function __construct(NoteService $noteService)
    {
        $this->noteService = $noteService;
    }

    public function list(Request $request): JsonResponse
    {
        try {
            $notes = $this->noteService->all($request->all());
            return response()->json(['result' => 'success', 'notes' => $notes], 200);
        } catch (\Throwable $th) {
            return response()->json(['result' => 'fail', 'message' => $th->getMessage()], 400);
        }
    }

    public function store(NoteRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();
            $note = $this->noteService->addNote($validated);
            return response()->json(['result' => 'success', 'note' => $note], 201);
        } catch (\Throwable $th) {
            return response()->json(['result' => 'fail', 'message' => $th->getMessage()], 400);
        }
    }

    public function update($id): JsonResponse
    {
        try {
            $note = $this->noteService->update(Request()->all(), $id);
            return response()->json(['result' => 'success'], 200);
        } catch (\Throwable $th) {
            return response()->json(['result' => 'fail', 'message' => $th->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $note = $this->noteService->delete($id);
            return response()->json(['result' => 'success'], 204);
        } catch (\Throwable $th) {
            return response()->json(['result' => 'fail', 'message' => $th->getMessage()], 400);
        }
    }
}
