import { EntityManager } from "typeorm";
import { getMockEntityManger } from "../__mocks__/mockEntityManger.mock";
import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

describe('UserRepository', () => {

    let userRepository: UserRepository;

    let managerMock: Partial<EntityManager>;

    const mockUser: User = {

        id_user: '123',
        name: 'Teste User',
        email: 'teste@diobank.com',
        password: 'passwordTeste'

    }

    beforeAll(async () => {

        managerMock = await getMockEntityManger({
            saveReturn: mockUser
        });

        userRepository = new UserRepository(managerMock as EntityManager);

    })

    it('Deve cadastrar um novo usuário no banco de dados', async () => {

        const response = await userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
        expect(response).toMatchObject(mockUser);

    })

})