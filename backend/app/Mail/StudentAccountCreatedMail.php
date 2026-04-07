<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class StudentAccountCreatedMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $studentName,
        public string $studentNumber,
        public string $email,
        public string $temporaryPassword,
        public ?string $portalUrl = null,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your student account is ready — '.config('mail.from.name'),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.student-account-created',
        );
    }
}

