<script>
	import { Icon } from 'svelte-icons-pack';
	import '../../app.css';
	import { FaSolidChartPie,FaSolidBuilding,FaSolidMoneyBill1Wave  } from "svelte-icons-pack/fa";
	import { RiOthersHandbagFill } from "svelte-icons-pack/ri";
	import { BsPersonFill,BsPeopleFill } from "svelte-icons-pack/bs";

	import { page } from '$app/stores';

	let path;
	$: path = $page.url.pathname;
</script>



<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" class="flex ms-2 md:me-24">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
          <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-800">NevMock</span>
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
								<enhanced:img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white ">
		<ul class="space-y-2 font-medium">
			<li>
				<a href="/dashboard" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/dashboard') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={FaSolidChartPie} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="/company" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/company') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={FaSolidBuilding} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">Company</span>
				</a>
			</li>
			<li>
				<a href="/position" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/position') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={RiOthersHandbagFill} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">Position</span>
				</a>
			</li>
			<li>
				<a href="/employee" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/employee') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={BsPersonFill} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">Employee</span>
				</a>
			</li>
			<li>
				<a href="/salary" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/salary') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={FaSolidMoneyBill1Wave} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">Salary</span>
				</a>
			</li>
			<li>
				<a href="/user" class={`flex items-center p-2 rounded-lg group ${path.startsWith('/user') ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100'}`}>
					<Icon src={BsPeopleFill} className="w-5 h-5" />
					<span class="flex-1 ms-3 whitespace-nowrap">User</span>
				</a>
			</li>
		</ul>
		
   </div>
</aside>

<div class="p-4 sm:ml-64">
   <div class="p-4 mt-14">
      <slot/>
   </div>
</div>

