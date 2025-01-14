<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="w-full max-w-sm bg-white p-6 rounded-md shadow-md">
            <h1 class="text-2xl font-semibold text-center text-blue-600">Login</h1>
            <form class="mt-4">
                <div class="mb-4">
                    <label class="block text-sm text-gray-700">Email</label>
                    <input type="email"
                        class="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm text-gray-700">Senha</label>
                    <input type="password"
                        class="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                </div>
                <button type="submit" class="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>