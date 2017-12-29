<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u = new User();
        $u->nama = 'example Admin';
        $u->email = 'example@ecommerce.com';
        $u->password = bcrypt('123456');
        $u->remember_token = 'Memeber';
        $u->save();
    }
}
