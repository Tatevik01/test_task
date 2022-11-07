<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'alpha_num'],
            'last_name' => ['required', "regex:/^[a-zA-Z0-9’'_-]+$/", 'max:255'],
            'email' => ['required', 'unique:contact,email', 'regex:/(.+)@(.+)\.(.+)/i', 'max:255'],
            'zip_code' => ['required', 'digits:5'],
            'state' => ['required', 'string']
        ];
    }
}
