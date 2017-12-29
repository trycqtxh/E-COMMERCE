<?php

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $s = new Setting();
        $s->nama_aplikasi = 'E-commerce';
        $s->deskripsi = 'E-commerce';
        $s->no_sms = '081313309219';
        $s->no_whatsapp = '081313309219';
        $s->medsos_facebook = 'https://facebook.com';
        $s->medsos_instagram = 'https://instagram.com';
        $s->medsos_twitter = 'https://twitter.com';
    }
}
