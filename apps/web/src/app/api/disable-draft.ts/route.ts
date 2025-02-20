import { draftMode } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const draft = await draftMode();
  draft.disable();

  const url = new URL(request.nextUrl);

  return NextResponse.redirect(new URL('/', url.origin));
};
