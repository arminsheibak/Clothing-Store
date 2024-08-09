from django.test import Client, TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse


class TestUserModel(TestCase):

    def test_create_user_with_email_successful(self):
        user = get_user_model().objects.create_user(
            email = 'test@email.com',
            password = 'testpassword123',
        )

        self.assertEqual(user.email, 'test@email.com')
        self.assertTrue(user.check_password('testpassword123'))
    
    def test_new_user_email_normalized(self):
        email = 'test@EMIil.coM'
        user = get_user_model().objects.create_user(email=email, password='password')
        
        self.assertEqual(user.email, email.lower())
    
    def test_create_user_without_email_fails(self):
        with self.assertRaises(ValueError):
            user = get_user_model().objects.create_user(email=None, password='test123')
    
    def test_create_superuser_successful(self):
        superuser= get_user_model().objects.create_superuser(
            email='admin@email.com', password='iamsuperuser'
        )

        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

class TestUserAdmin(TestCase):

    def setUp(self):
        self.client = Client()
        self.admin_user = get_user_model().objects.create_superuser(
            email="admin@email.com", password="password123"
        )
        self.client.force_login(self.admin_user)
        self.user = get_user_model().objects.create_user(
            email="user@email.com", password="password1234"
        )

    def test_users_are_listed_on_users_page(self):
        url = reverse("admin:users_user_changelist")
        response = self.client.get(url)

        self.assertContains(response, self.user.email)

    def test_user_change_page_works(self):
        url = reverse("admin:users_user_change", args=[self.user.id])
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)

    def test_user_add_page(self):
        url = reverse("admin:users_user_add")
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)