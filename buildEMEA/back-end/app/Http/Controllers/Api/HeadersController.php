<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Header;
use App\Http\Resources\HeadersResource;


class HeadersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
      /**
     * Display headers by table_id with order by order_id.
     *
     * @param int $table_id
     * @return \Illuminate\Http\JsonResponse
     */
    // public function getByTableId($table_id)
    // {
    //     $headers = Header::where('table_id', $table_id)->orderBy('order_id')->get();
    
    //     return response()->json(HeadersResource::collection($headers));
    // }
     /**
     * Get headers with associated values.
     *
     * @param int $table_id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getHeadersWithValues($table_id)
    {
        $headers = Header::with('values')->where('table_id', $table_id)->orderBy('order_id')->get();
        return HeadersResource::collection($headers);
    }
}
