<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'first_name'  => $this->faker->name,
            'last_name'  => $this->faker->name,
            'email' => $this->faker->unique()->email,
            'zip_code'  => random_int(10000, 99999),
            'state'  => $this->faker->randomElement(['Florida', 'Hawaii', 'New York', 'Texas']),
        ];
    }
}
