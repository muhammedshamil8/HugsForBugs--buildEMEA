<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Value;
use Illuminate\Http\Request;
use App\Http\Resources\ValuesResource;

class ValuesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $values = Value::all();

        return response()->json(ValuesResource::collection($values), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'header_id' => 'required|exists:headers,id',
            'value' => 'required|string',
        ]);

        $value = Value::create($data);

        return response()->json(new ValuesResource($value), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $value = Value::findOrFail($id);

        return response()->json(new ValuesResource($value), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'header_id' => 'exists:headers,id',
            'value' => 'string',
        ]);

        $value = Value::findOrFail($id);
        $value->update($data);

        return response()->json(new ValuesResource($value), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $value = Value::findOrFail($id);
        $value->delete();

        return response()->json(null, 204);
    }
}
