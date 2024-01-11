<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Value;
use Illuminate\Http\Request;
use App\Http\Resources\ValuesResource;
use App\Models\Header;

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
    public function deleteRowAndValues($table_id, $row_id)
    {
        // Find the headers for the given table_id
        $headers = Header::where('table_id', $table_id)->get();

        // Check if the headers exist
        if ($headers->isEmpty()) {
            return response()->json(['message' => 'Headers not found for the given table_id'], 404);
        }

        // Iterate through each header and delete the associated values for the given row_id
        foreach ($headers as $header) {
            Value::where('header_id', $header->id)->where('row_id', $row_id)->delete();
        }

        return response()->json(['message' => 'Values deleted successfully'], 200);
    }

    public function getValuesByRowId($table_id, $row_id)
    {
        // Find the headers for the given table_id
        $headers = Header::where('table_id', $table_id)->get();

        // Check if the headers exist
        if ($headers->isEmpty()) {
            return response()->json(['message' => 'Headers not found for the given table_id'], 404);
        }

        // Initialize an array to store values for each header
        $valuesByHeader = [];

        // Iterate through each header and fetch the associated values for the given row_id
        foreach ($headers as $header) {
            $values = Value::where('header_id', $header->id)->where('row_id', $row_id)->get();
            $valuesByHeader[$header->id] = $values;
        }

        return response()->json(['valuesByHeader' => $valuesByHeader], 200);
    }

     /**
     * Update a specific value for a header and row.
     *
     * @param int $header_id
     * @param int $row_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateValues($header_id, $row_id, Request $request)
    {
        $value = Value::where('header_id', $header_id)
            ->where('row_id', $row_id)
            ->first();

        if (!$value) {
            return response()->json(['message' => 'Value not found'], 404);
        }

        $value->update(['value' => $request->input('value')]);

        return response()->json(['message' => 'Value updated successfully', 'data' => new ValuesResource($value)], 200);
    }

    /**
     * Insert values for a specific row.
     *
     * @param int $row_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function insertValues(Request $request)
    {
        $valuesData = $request->input('values');

        // Validate $valuesData as needed

        $insertedValues = [];

        foreach ($valuesData as $valueData) {
            $value = Value::create([
                'header_id' => $valueData['header_id'],
                'value' => $valueData['value'],
            ]);

            $insertedValues[] = new ValuesResource($value);
        }

        return response()->json(['message' => 'Values inserted successfully', 'data' => $insertedValues], 201);
    }
}
