<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>My Invoices</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <!-- /.card -->
              <DataTable :label="label" :transactions="transactions"
              :detailUrl="detailUrl" @refresh-transactions="fetchInvoices"/>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>

</template>



<script>
    import DataTable from '@/components/DataTable';

    export default {
        'name': 'Invoice',
        data(){
            return {
                title: 'My Invoices',
                detailUrl: '/my-invoices/',
                label: `
                    <tr>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Grant Total</th>
                      <th>Modified</th>
                    </tr>
                `,
                transactions: []
            }
        },
        methods: {
            async fetchInvoices(){
                // $('#transactions-table').DataTable().destroy();
                let res = await this.$frappe.get_list(
                    'Sales Invoice',
                    'fields=["name", "title", "status", "modified", "grand_total", "currency"]&order_by=modified DESC&limit=1000'
                );
                console.log('res', res)
                if(res.status_code==200){
                    // console.log(res)
                    this.transactions = res.data;
                } else {
                    this.$popIt.error('Error!', res.text);
                }
            }
        },
        mounted(){
            // if(this.)
            if(!['/login', '/register', '/signup'].includes(this.$route.path)){
                this.user = this.$sessionUserData();
            }
            setTimeout(()=>{
                this.fetchInvoices();
            }, 2000);
            // console.log(this.user.full_name)
        },
        components: {
            DataTable
        },
    }
</script>
