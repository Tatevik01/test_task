<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

/**
 * Class ContactController
 * @package App\Http\Controllers\Api
 */
class ContactController extends Controller
{
    /**
     * Save Contact Info
     *
     * @param ContactRequest $request
     *
     * @return JsonResponse
     */
    public function saveContactInfo(ContactRequest $request): JsonResponse
    {
        return response()->json(
            Contact::create($request->validated())
        );
    }
}
