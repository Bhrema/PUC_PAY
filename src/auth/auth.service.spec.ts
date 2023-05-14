import { Test } from '@nestjs/testing'
import { AuthService } from '../auth/auth.service'
import { UsersService } from 'src/users/users.service';

it('can create an instance of AuthService', async () => {

    const fakeUsersService = {
        find: () => Promise.resolve([]),
        create: (email:string , password: string) => Promise.resolve({ id: 1, email, password })
    }


    const module = await Test.createTestingModule({
        providers: [
            AuthService,
            {
                provide: UsersService,
                useValue: fakeUsersService
            }
        ]
    }).compile();

    const service = module.get(AuthService);

    expect(service).toBeDefined()
})